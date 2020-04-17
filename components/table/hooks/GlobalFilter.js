import { withTranslation } from '../../../i18n';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  t,
}) {
  const count = preGlobalFilteredRows.length;

  return (
    <span>
      {`${t('Search')}: `}
      <input
        value={globalFilter || ''}
        onChange={event => {
          setGlobalFilter(event.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={t('records', { count })}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  );
}

export default withTranslation('common')(GlobalFilter);
