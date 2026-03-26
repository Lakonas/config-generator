function StackCard({ item, isSelected, onToggle }) {
  return (
    <button
      onClick={() => onToggle(item.id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
        isSelected
          ? 'bg-blue-600 text-white'
          : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
      }`}
    >
      {item.name}
    </button>
  );
}

export default StackCard;