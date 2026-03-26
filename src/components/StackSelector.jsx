import { stackItems, categories } from '../data/stacks';
import StackCard from './StackCard';

function StackSelector({ selectedStack, onToggle }) {
  return (
    <section className="mb-8">
      {categories.map((category) => (
        <div key={category} className="mb-4">
          <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">{category}</h2>
          <div className="flex flex-wrap gap-2">
            {stackItems
              .filter((item) => item.category === category)
              .map((item) => (
                <StackCard
                  key={item.id}
                  item={item}
                  isSelected={selectedStack.includes(item.id)}
                  onToggle={onToggle}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default StackSelector;