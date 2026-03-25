import { stackItems, categories } from '../data/stacks';
import StackCard from './StackCard';

function StackSelector({ selectedStack, onToggle }) {
  return (
    <section>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
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