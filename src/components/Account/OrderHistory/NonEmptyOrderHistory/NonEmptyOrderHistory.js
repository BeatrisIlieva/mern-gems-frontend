export const NonEmptyOrderHistory = () => {
  return (
    <ul role="list" className={styles["order-history"]}>
      {orderItems.map((item) => (
        <li key={item._id}>
          <OrderHistoryList {...item} />
        </li>
      ))}
    </ul>
  );
};
