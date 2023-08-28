import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => {
  TodoItem.propTypes = { itemProp: PropTypes.node.isRequired };
  return (
    <li>{itemProp.title}</li>
  );
};

export default TodoItem;
