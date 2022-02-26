import classes from "./CartItem.module.css"
const Checkout = (props) => {
    return (
        <form>
            <div className={classes.control}>
                <label htmlFor="name"> Your Name</label>
                <input type="text" id="name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="street"> Street</label>
                <input type="text" id="street" />
            </div>
            <div className={classes.control}>
                <label htmlFor="city"> City</label>
                <input type="text" id="city" />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal"> Postal Code</label>
                <input type="text" id="postal" />
            </div>
            <button>Confirm</button>
            <button type="button" onClick={props.onCancel}>Cancel</button>
        </form>
    )
};

export default Checkout;