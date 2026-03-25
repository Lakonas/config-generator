import { configFields } from '../data/configFields';

function ConfigOptions({ generator, options, onUpdate }) {
  const fields = configFields[generator];
  if (!fields) return null;

  return (
    <div>
      <h3>{generator}</h3>
      {fields.map((field) => (
        <div key={field.key}>
          {field.type === 'toggle' && (
            <label>
              <input
                type="checkbox"
                checked={options[field.key]}
                onChange={(e) => onUpdate(generator, field.key, e.target.checked)}
              />
              {field.label}
            </label>
          )}
          {field.type === 'radio' && (
            <fieldset>
              <legend>{field.label}</legend>
              {field.options.map((opt) => (
                <label key={opt}>
                  <input
                    type="radio"
                    name={`${generator}-${field.key}`}
                    value={opt}
                    checked={options[field.key] === opt}
                    onChange={() => onUpdate(generator, field.key, opt)}
                  />
                  {String(opt)}
                </label>
              ))}
            </fieldset>
          )}
        </div>
      ))}
    </div>
  );
}

export default ConfigOptions;