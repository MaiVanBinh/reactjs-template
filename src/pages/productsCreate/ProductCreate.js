import React, { useState } from "react";
import "./ProductCreate.css";
import ApiFetching from "../../utilities/ApiFetching";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductCreate = (props) => {
  const { createProduct } = ApiFetching();

  const {token} = props;

  const history = useHistory();

  const [name, setName] = useState({
    value: "",
    touch: false,
  });

  const [type, setType] = useState({
    value: "",
    touch: false,
  });

  const [price, setPrice] = useState({
    value: 0,
    touch: false,
  });

  const [imageLink, setImageLink] = useState({
    value: "",
    touch: false,
  });

  const createProductHandle = () => {

    const payload = { name: name.value, price: price.value, type: type.value, imageLink: imageLink.value };
    // console.log(payload);
    createProduct(token, payload, (data) => {
      history.push("/products");
    });
  };

  return (
    <div className="form-create">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createProductHandle();
        }}
      >
        <div className="login-container">
          <label for="uname">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name.value}
            onChange={(event) =>
              setName({
                value: event.target.value,
                touch: true,
              })
            }
            required
          />
          {name.touch && name.value === "" && <p>Not empty</p>}

          <label for="type">
            <b>type</b>
          </label>
          <input
            type="text"
            placeholder="Enter type"
            name="type"
            value={type.value}
            onChange={(event) =>
              setType({
                value: event.target.value,
              })
            }
            required
          />

          <label for="price">
            <b>price</b>
          </label>
          <input
            type="number"
            placeholder="Enter price"
            name="price"
            value={price.value}
            onChange={(event) =>
              setPrice({
                value: event.target.value,
              })
            }
            required
          />

          <label for="type">
            <b>Image Link</b>
          </label>
          <input
            type="text"
            placeholder="Enter image link"
            name="price"
            value={imageLink.value}
            onChange={(event) =>
              setImageLink({
                value: event.target.value,
              })
            }
            required
          />

          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(ProductCreate);
