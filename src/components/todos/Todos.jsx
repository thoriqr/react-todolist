/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                completeTodo={completeTodo}
                index={index}
              />
            );
          })}
        {todos.length === 0 && (
          <React.Fragment>
            <div css={styles.todoPlaceHolderText}>
              add todo by clicking{" "}
              <span css={styles.addButtonPlaceHolderText}>Add</span> button on
              the top left corner
            </div>
            <Container justifyContent="center">
              <Item>
                <Link to="/about">
                  <span css={styles.seeAboutPagePlaceholderText}>
                    Or visit about page
                  </span>
                </Link>
              </Item>
            </Container>
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
