import React from "react";
import {connect} from 'react-redux'
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";


class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    submitHandler = (e) => {
        e.preventDefault()
        const {title} = this.state;

        if (!title.trim()) {
            return this.props.showAlert('Название поста не может быть пустым.')
        }

        const newPost = {
            title, id: Date.now().toString()
        };

        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    // универсальный обработчик input
    changeInputHandler = (e) => {
        this.setState(prev => ({
            ...prev, ...{
                [e.target.name]: e.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    {this.props.alert && <Alert text={this.props.alert}/>}
                    <h4 htmlFor="title" className="form-label">Заголовок поста</h4>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Введите заголовок"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>

                <button className="btn btn-success mb-5" type="submit">Создать</button>

            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)


