import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import useSWR from "swr";

import { createItem, getItemById } from "../api/api";
import {
  ORDER_ITEMS,
  ORDERS,
  SUPER_PAYMENT_METHODS,
  SUPER_SHIPPING_METHODS,
} from "../api/routes";
import OrderItem from "../components/OrderItem";
import { removeOrder } from "../redux/reducers/orderSlice";
import idrPriceFormat from "../utils/price";

function CheckoutEmpty() {
  return (
    <>
      <div className="flex h-[calc(100vh_-_236px)] items-center justify-center text-center sm:h-[calc(100vh_-_196px)]">
        <div className="">
          <h2 className="mb-4 text-2xl font-bold">Your Order is Empty</h2>
          <div className="mb-6">
            Start Shopping Now and Find the Products You Want
          </div>
          <Link className="btn btn-primary">Start Shopping</Link>
        </div>
      </div>
    </>
  );
}

function CheckoutSuccess() {
  return (
    <>
      <div className="flex h-[calc(100vh_-_236px)] items-center justify-center text-center sm:h-[calc(100vh_-_196px)]">
        <div className="">
          <h2 className="mb-4 text-2xl font-bold">
            Your Order has been submitted
          </h2>
          <div className="mb-6">Start Shopping Again</div>
          <Link className="btn btn-primary">Start Shopping</Link>
        </div>
      </div>
    </>
  );
}

function CheckoutOverview() {
  const order = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.auth);

  const totalOrderItems =
    order.totalAmounts === 1 ? `1 product` : `${order.totalAmounts} products`;

  const itemsList = order.items?.map(function (item) {
    return <OrderItem key={item.productId} item={item}></OrderItem>;
  });

  const { data: superShippingMethod } = useSWR(
    `${SUPER_SHIPPING_METHODS}/${
      order["shipping-method"]
        ? order["shipping-method"]["super-shipping-methodId"]
        : 1
    }`,
    getItemById,
  );

  const { data: superPaymentMethod } = useSWR(
    `${SUPER_PAYMENT_METHODS}/${
      order["payment-method"]
        ? order["payment-method"]["super-payment-methodId"]
        : 1
    }`,
    getItemById,
  );

  const form = useForm({
    defaultValues: {
      userId: 0,
      totalAmounts: 0,
      subTotalProductPrice: 0,
      status: "pending",

      address: "",
      phone: "",
      "shipping-methodId": 0,
      "payment-methodId": 0,
      insurance: false,

      totalPrice: 0,
    },
  });

  const { handleSubmit, reset } = form;

  useEffect(() => {
    reset({
      userId: user.id,
      totalAmounts: order.totalAmounts,
      subTotalProductPrice: order.subTotalProductPrice,

      address: order.address,
      phone: order.phone,
      "shipping-methodId": order["shipping-methodId"],
      "payment-methodId": order["payment-methodId"],
      insurance: order.insurance,

      totalPrice: order.totalPrice,
    });
  }, [order, reset, user]);

  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const orderData = await createItem(ORDERS, data);

      console.log("orderResponse", orderData);

      const orderItemRequests = order.items.map((product) => {
        return new Promise((resolve, reject) => {
          try {
            const orderItem = createItem(ORDER_ITEMS, {
              orderId: order.id,
              amounts: product.amounts,
              productId: product.productId,
              subTotal: product.subTotal,
            });

            resolve(orderItem);
          } catch (error) {
            reject(error);
          }
        });
      });

      const orderItemsData = await Promise.all(orderItemRequests);

      console.log("orderResponse", orderItemsData);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(removeOrder());
      setSuccess(true);
    }
  };

  if (!order["shipping-method"] || !order["payment-method"]) {
    return <Navigate to={"/checkout"} replace></Navigate>;
  }

  if (success) {
    return <CheckoutSuccess></CheckoutSuccess>;
  }

  if (order.totalAmounts === 0) {
    return <CheckoutEmpty></CheckoutEmpty>;
  }

  return (
    <>
      <form
        className="flex flex-wrap pt-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="mb-6 w-full lg:mr-6 lg:min-w-[67%] lg:max-w-[67%] lg:grow lg:basis-0">
          <div className="card mb-6 w-full shadow-xl">
            <div className="card-body p-6">
              <div>
                <h2 className="text-xl font-bold">Shipping</h2>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h2 className="font-medium">Address and Phone</h2>
                    <div>{order.address}</div>
                    <div>{order.phone}</div>
                    <div>{user.email}</div>
                  </div>
                  <div>
                    <h2 className="font-medium">
                      Type:{" "}
                      <span className="font-normal">
                        {superShippingMethod?.name}
                      </span>
                    </h2>
                    <div>{order["shipping-method"].name}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold">Payment</h2>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h2 className="font-medium">
                      Type:{" "}
                      <span className="font-normal">
                        {superPaymentMethod?.name}
                      </span>
                    </h2>
                    <div>{order["payment-method"].name}</div>
                    {order.insurance && <div>Using Insurance</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full shadow-xl">
            <div className="card-body p-6">
              <h2 className="text-2xl font-bold">Product</h2>

              <div className="flex items-center justify-between text-center">
                <div>{totalOrderItems}</div>
              </div>

              <div>{itemsList}</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:grow lg:basis-0">
          <div className="card sticky top-12 mb-6 shadow-xl">
            <div className="card-body p-6">
              <div className="text-xl font-bold">Details</div>
              <div className="py-4">
                <div className="flex justify-between pb-4">
                  <div>
                    <span>Total Price</span>{" "}
                    <span className="lg:block min-[1130px]:inline">
                      ({totalOrderItems})
                    </span>
                  </div>
                  <div>{idrPriceFormat(order.subTotalProductPrice)}</div>
                </div>
                {order["shipping-method"] ? (
                  <div className="flex justify-between pb-4">
                    <div className="">Shipping costs</div>
                    <div className="">
                      {idrPriceFormat(order["shipping-method"].price)}
                    </div>
                  </div>
                ) : null}
                <div className="flex justify-between pb-4">
                  <div className="font-bold">Total</div>
                  <div className="font-bold">
                    {idrPriceFormat(order.totalPrice)}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CheckoutOverview;
