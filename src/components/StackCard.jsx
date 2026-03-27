function StackCard({ item, isSelected, onToggle }) {
  return (
    <button
      onClick={() => onToggle(item.id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
        isSelected
          ? 'bg-blue-50 text-blue-700 border border-blue-300 shadow-sm'
          : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700 hover:shadow-sm'
      }`}
    >
      {item.name}
    </button>
  );
}

export default StackCard;