//numItems --> total number of items
//num.length --> takes array and returns the length of the array (number of items)
//

export default function Stats({items}) {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {
            percentage === 100
              ? "Congrats! You're all Packed"
              : `You have ${numItems} items in the list. You already packed ${numPacked} (${percentage}%).`
          }
          </em>
      </footer>
    );
}