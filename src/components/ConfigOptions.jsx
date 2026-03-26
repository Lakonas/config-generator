import { configFields } from '../data/configFields';

function ConfigOptions({ generator, options, onUpdate }) {
  const fields = configFields[generator];
  if (!fields) return null;

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.key}>
          {field.type === 'toggle' && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={options[field.key]}
                onChange={(e) => onUpdate(generator, field.key, e.target.checked)}
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-sm text-gray-700">{field.label}</span>
            </label>
          )}
          {field.type === 'radio' && (
            <div>
              <p className="text-xs text-gray-500 mb-1">{field.label}</p>
              <div className="flex flex-wrap gap-1">
                {field.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => onUpdate(generator, field.key, opt)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      options[field.key] === opt
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {String(opt)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ConfigOptions;