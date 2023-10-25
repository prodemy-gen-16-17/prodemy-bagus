import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useSWR from "swr";
import * as yup from "yup";

import { getAllItems } from "../api/api";
import { SUPER_PAYMENT_METHODS, SUPER_SHIPPING_METHODS } from "../api/routes";
import OrderItem from "../components/OrderItem";
import { updateOrder } from "../redux/reducers/orderSlice";
import findMethodByIdInData from "../utils/findMethodByIdInData";
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

function Checkout() {
  const { items, totalAmounts, subTotalProductPrice, totalPrice } = useSelector(
    (state) => state.order,
  );
  const { user } = useSelector((state) => state.auth);

  const totalOrderItems =
    totalAmounts === 1 ? `1 product` : `${totalAmounts} products`;

  const itemsList = items?.map(function (item) {
    return <OrderItem key={item.productId} item={item}></OrderItem>;
  });

  const { data: superShippingMethods } = useSWR(
    `${SUPER_SHIPPING_METHODS}?_embed=shipping-methods`,
    getAllItems,
  );

  const { data: superPaymentMethods } = useSWR(
    `${SUPER_PAYMENT_METHODS}?_embed=payment-methods`,
    getAllItems,
  );

  const superShippingMethodsList = superShippingMethods?.map(
    (superShippingMethod) => {
      const shippingMethodList = superShippingMethod["shipping-methods"].map(
        (shippingMethod) => (
          <option key={shippingMethod.id} value={shippingMethod.id}>
            {shippingMethod.name}
          </option>
        ),
      );

      return (
        <optgroup key={superShippingMethod.id} label={superShippingMethod.name}>
          {shippingMethodList}
        </optgroup>
      );
    },
  );

  const superPaymentMethodsList = superPaymentMethods?.map(
    (superPaymentMethod) => {
      const paymentMethodList = superPaymentMethod["payment-methods"].map(
        (paymentMethod) => (
          <option key={paymentMethod.id} value={`${paymentMethod.id}`}>
            {paymentMethod.name}
          </option>
        ),
      );

      return (
        <optgroup key={superPaymentMethod.id} label={superPaymentMethod.name}>
          {paymentMethodList}
        </optgroup>
      );
    },
  );

  const schema = yup.object({
    address: yup.string().required("Required"),
    phone: yup.string().required("Required"),
    "shipping-methodId": yup.number().required("Required"),
    "payment-methodId": yup.number().required("Required"),
    insurance: yup.boolean(),
  });

  const form = useForm({
    defaultValues: {
      userId: 0,
      totalAmounts: 0,
      subTotalProductPrice: 0,

      address: "",
      phone: "",
      "shipping-methodId": 0,
      "shipping-method": null,
      "payment-methodId": 0,
      "payment-method": null,
      insurance: false,

      totalPrice: 0,
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, reset, setValue, watch, formState } = form;
  const { errors } = formState;
  const values = watch();

  useEffect(() => {
    reset({
      userId: user.id,
      totalAmounts: totalAmounts,
      subTotalProductPrice: subTotalProductPrice,
      totalPrice: totalPrice,
    });
  }, [reset, subTotalProductPrice, totalAmounts, totalPrice, user]);

  useEffect(() => {
    const subscription = watch((values) => {
      console.log("watch", values);
      const shippingMethodId = values["shipping-methodId"];
      const paymentMethodId = values["payment-methodId"];

      if (shippingMethodId) {
        const shippingMethod = findMethodByIdInData(
          superShippingMethods,
          "shipping-methods",
          shippingMethodId,
        );
        if (shippingMethod.id !== values["shipping-method"]?.id) {
          setValue("shipping-method", shippingMethod);

          const newTotalPrice =
            values.subTotalProductPrice + shippingMethod.price;
          setValue("totalPrice", newTotalPrice);
        }
      }

      if (paymentMethodId) {
        const paymentMethod = findMethodByIdInData(
          superPaymentMethods,
          "payment-methods",
          paymentMethodId,
        );
        if (paymentMethod.id !== values["payment-method"]?.id) {
          setValue("payment-method", paymentMethod);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [setValue, superPaymentMethods, superShippingMethods, watch]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

    dispatch(updateOrder(data));

    navigate("overview");
  };

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
                  {...register("shipping-methodId", { valueAsNumber: true })}
                >
                  <option disabled value="0">
                    Shipping Method
                  </option>
                  {superShippingMethodsList}
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
                  {...register("payment-methodId", { valueAsNumber: true })}
                >
                  <option disabled value="0">
                    Payment Method
                  </option>
                  {superPaymentMethodsList}
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
                  <div>{idrPriceFormat(subTotalProductPrice)}</div>
                </div>
                {values["shipping-method"] ? (
                  <div className="flex justify-between pb-4">
                    <div className="">Shipping costs</div>
                    <div className="">
                      {idrPriceFormat(values["shipping-method"].price)}
                    </div>
                  </div>
                ) : null}
                <div className="flex justify-between pb-4">
                  <div className="font-bold">Total</div>
                  <div className="font-bold">
                    {idrPriceFormat(values.totalPrice)}
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

export default Checkout;
