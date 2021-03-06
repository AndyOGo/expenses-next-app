import BSButton from '../../bootstrap/BSButton/BSButton';

const useRowDelete = ({ onDelete, deleteText }) => hooks => {
  hooks.visibleColumns.push(columns => [
    ...columns,
    // Let's make a column for delete
    {
      id: 'delete',
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: deleteText,
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }) => (
        <BSButton
          type="button"
          variant="danger"
          onClick={() => onDelete(row.original.id)}
        >
          {deleteText}
        </BSButton>
      ),
    },
  ]);
};

export default useRowDelete;
