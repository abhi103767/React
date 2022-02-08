import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ handleClick }) => {
    const [form, setForm] = useState({
        title: "",
        task: "",
    });

    const onSubmit = (form) => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                Title: "todo",
                body: {
                    ...form,
                },
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    };

    const onChange = (event) => {
        setForm((pervForm) => {
            return {
                ...pervForm,
                [event.target.name]: event.target.value,
            };
        });
    };

    // console.log(form);

    return (
        <div>
            <input type="text" name="title" onInput={onChange} />
            <input type="text" name="task" onInput={onChange} />
            <button
                onClick={() => {
                    onSubmit(form);
                    handleClick();
                }}
            >
                Submit
            </button>
        </div>
    );
};
