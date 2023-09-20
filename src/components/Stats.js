const Stats = ({ items }) => {
  const totalItem = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;
  const completeRate = Math.round((totalPackedItems / totalItem) * 100);

  return (
    <footer>
      <em>
        You have {totalItem} items on yuor List. and your already packed{" "}
        {totalPackedItems} Item {`(${completeRate})`}%)
      </em>
    </footer>
  );
};

export default Stats;
