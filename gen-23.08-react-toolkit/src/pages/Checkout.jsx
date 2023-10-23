import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { createItem } from "../api/api";
import { ORDER_ITEMS, ORDERS } from "../api/routes";
import { removeOrder } from "../redux/reducers/orderSlice";
import idrPriceFormat from "../utils/price";
// TODO: Create checkout multi step navigation
function OrderItem({ item }) {
  const { product, subTotal } = item;
  const { id, name, sku, images, price } = product;

  return (
    <>
      <div className="border-b-2 last:border-b-0">
        <div className="flex gap-3">
          <Link to={`/products/${id}`} className="w-16 flex-none">
            <img className="rounded" src={images[0]} alt={name} />
          </Link>

          <div className="flex-1">
            <Link to={`/products/${id}`} className="font-bold">
              {name}
            </Link>
            <div className="text-sm">SKU {sku}</div>
            <div className="flex items-center justify-between font-bold">
              <span>{idrPriceFormat(price)}</span>
              <span>{idrPriceFormat(subTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
};

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

function Checkout() {
  const { items, totalAmounts, totalPrice } = useSelector(
    (state) => state.order,
  );
  const { user } = useSelector((state) => state.auth);

  const totalOrderItems =
    totalAmounts === 1 ? `1 product` : `${totalAmounts} products`;

  const itemsList = items?.map(function (item) {
    return <OrderItem key={item.productId} item={item}></OrderItem>;
  });

  const schema = yup.object({
    address: yup.string().required("Required"),
    phone: yup.string().required("Required"),
    shipping: yup.string().required("Required"),
    payment: yup.string().required("Required"),
    insurance: yup.boolean(),
  });

  const form = useForm({
    defaultValues: {
      userId: 0,
      totalAmounts: 0,
      totalPrice: 0,
      status: "pending",

      address: "",
      phone: "",
      shipping: "",
      payment: "",
      insurance: false,
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  useEffect(() => {
    reset({
      userId: user.id,
      totalAmounts: totalAmounts,
      totalPrice: totalPrice,
    });
  }, [reset, totalAmounts, totalPrice, user.id]);

  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const order = await createItem(ORDERS, data);

      console.log("orderResponse", order);

      const orderItemRequests = items.map((product) => {
        return createItem(ORDER_ITEMS, {
          orderId: order.id,
          amounts: product.amounts,
          productId: product.productId,
          subTotal: product.subTotal,
        });
      });

      const orderItems = await Promise.all(orderItemRequests);

      console.log("orderResponse", orderItems);

      dispatch(removeOrder());
    } catch (error) {
      console.log(error);
    } finally {
      setSuccess(true);
    }
  };

  if (success) {
    return <CheckoutSuccess></CheckoutSuccess>;
  }

  if (totalAmounts === 0) {
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
              <h2 className="text-2xl font-bold">Product</h2>

              <div className="flex items-center justify-between text-center">
                <div>{totalOrderItems}</div>
              </div>

              <div>{itemsList}</div>
            </div>
          </div>

          <div className="card w-full shadow-xl">
            <div className="card-body p-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                  <span className="label-text-alt text-error">
                    {errors.address?.message}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                  {...register("address")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                  <span className="label-text-alt text-error">
                    {errors.phone?.message}
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="input input-bordered"
                  {...register("phone")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shipping Method</span>
                  <span className="label-text-alt text-error">
                    {errors.shipping?.message}
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("shipping")}
                >
                  <option disabled value="">
                    Shipping Method
                  </option>
                  <option value="same-day">Same-Day</option>
                  <option value="express">Express</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Payment Method</span>
                  <span className="label-text-alt text-error">
                    {errors.payment?.message}
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("payment")}
                >
                  <option disabled value="">
                    Payment Method
                  </option>
                  <option value="cash-on-delivery">Cash on Delivery</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="paylater">Paylater</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Insurance</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    {...register("insurance")}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:grow lg:basis-0">
          <div className="card sticky top-0 mb-6 shadow-xl">
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
                  <div>{idrPriceFormat(totalPrice)}</div>
                </div>
                <div className="flex justify-between pb-4">
                  <div className="font-bold">Total</div>
                  <div className="font-bold">{idrPriceFormat(totalPrice)}</div>
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

export default Checkout;
