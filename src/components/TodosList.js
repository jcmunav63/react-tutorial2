import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todosProps } = props;
  TodosList.propTypes = { todosProps: PropTypes.node.isRequired };
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};
export default TodosList;
