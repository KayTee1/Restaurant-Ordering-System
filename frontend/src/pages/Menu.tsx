import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import PacmanLoader from "react-spinners/PacmanLoader";
import MenuItemCard from "../components/MenuItemCard";

import Dish from "../types/Dish";
import { baseApiUrl } from "../utilities/baseApiUrl";

const Menu: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchDishes = useCallback(async () => {
    try {
      const dishesUrl = "api/dishes"
      const response = await axios.get<Dish[]>(baseApiUrl + dishesUrl);
      const data = response.data;

      setDishes(data);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDishes();
  }, [fetchDishes]);

  let renderContent;

  isError
    ? (renderContent = <p>Something Went Wrong! :(</p>)
    : (renderContent = (
        <Row md={2} xs={1} className="g-3">
          {dishes.map((dish: Dish, index: number) => (
            <Col key={index}>
              <MenuItemCard key={index} dish={dish} />
            </Col>
          ))}
        </Row>
      ));

  return (
    <>
      <Container>
        <h1 className="mb-3">Menu</h1>
        {isLoading ? (
          <PacmanLoader
            color="#295cba"
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          renderContent
        )}
      </Container>
    </>
  );
};

export default Menu;
