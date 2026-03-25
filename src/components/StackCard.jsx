function StackCard({ item, isSelected, onToggle }) {
  return (
    <button onClick={() => onToggle(item.id)}>
      <span>{item.name}</span>
    </button>
  );
}

export default StackCard;