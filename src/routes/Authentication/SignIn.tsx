
import { Button, Form, Input, message } from 'antd';
import { users } from '../../mock-data/users'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLoading, setLoggedIn, setUser } from '../../redux/authenticator';
import { Login } from './type';
function SignIn() {

    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.authenticator.loading)

    const onFinish = (values: Login) => {
        dispatch(setLoading(true))
        setTimeout(() => {
            let client = users.find((user) => user.username === values.username && user.password === user.password)
        if (!client)  {
            message.error('Kullanıcı adı ve şifresi yanlış!')
            dispatch(setLoading(false))
            return
        }
        dispatch(setUser(client))
            dispatch(setLoading(false))
            dispatch(setLoggedIn(true))
        }, 1000)
    };

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    return (
        <Form
            layout='vertical'
            name="basic"
            onFinish={onFinish}
        >
            <Form.Item<FieldType>
                label="Kullanıcı Adı"
                name="username"
                rules={[{ required: true, message: 'Lütfen kullanıcı adınızı girin!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Şifre"
                name="password"
                rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                    Giriş Yap
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SignIn
