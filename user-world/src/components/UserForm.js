import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";


const UserForm = ({ values, errors, touched, status }) => {
    console.log("values", values);
    console.log("errors", errors);
    console.log("touched", touched);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("status has changed!", status);

        status && setUsers(users => [...users, status]);
    }, [status])

    return (
        <div className="user-form">
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                <Field type="email" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <label className="checkbox-container">
                    Terms of Service
                    <Field type="checkbox" name="termsofservice" checked="{values.termsofservice}" />
                    <span className="checkmark" />
                </label>
                <button type="submit">Submit</button>
            </Form>

            {users.map(user => {
                return (
                    <ul key={user.id}>
                        <li>User: {user.name}</li>
                        <li>Email: {user.email}</li>
                        <li>Terms of Service: {user.termsofservice}</li>
                    </ul>
                );
            })}
        </div>
    );
};


const FormUserForm = withFormik({
    mapPropsToValues({ name, email, termsofservice }) {
        return {
            name: name || "",
            email: email || "",
            termsofservice: termsofservice || false
        };
    }
})(UserForm)

export default FormUserForm;
