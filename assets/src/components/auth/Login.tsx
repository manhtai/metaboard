import React from 'react';

import {
  faLock,
  faEnvelope,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {parseResponseErrors} from '../../util'

import {RouteComponentProps, Link} from 'react-router-dom';
import {useAuth} from './AuthProvider';
import logger from '../../logger';

type Props = RouteComponentProps & {
  onSubmit: (params: any) => Promise<void>;
};

type State = {
  loading: boolean;
  email: string;
  password: string;
  error: any;
};

class Login extends React.Component<Props, State> {
  state: State = {
    loading: false,
    email: '',
    password: '',
    error: null,
  };

  handleChangeEmail = (e: any) => {
    this.setState({email: e.target.value});
  };

  handleChangePassword = (e: any) => {
    this.setState({password: e.target.value});
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    this.setState({loading: true, error: null});
    const {email, password} = this.state;

    this.props
      .onSubmit({email, password})
      .then(() => this.props.history.push('/boards'))
      .catch((err) => {
        logger.error('Error!', err);
        const [error] = parseResponseErrors(err)
        this.setState({error, loading: false});
      });
  };

  render() {
    const {loading, email, password, error} = this.state;

    return (
      <>
        <main>
          <section className="absolute w-full h-full">
            <div className="container h-full px-4 mx-auto">
              <div className="flex items-center content-center justify-center h-full">
                <div className="w-full max-w-md -mt-20">
                  <div className="relative flex flex-col w-full min-w-0 mb-6 break-words">
                    <h1 className="flex-auto p-2 text-2xl font-bold text-center">
                      Welcome back!
                    </h1>
                    <p className="text-center">
                      {"Log in to your Metaboard account:"}
                    </p>
                    <div className="flex-auto px-4 py-10 lg:px-10">
                      <form onSubmit={this.handleSubmit}>
                        <div className="relative flex flex-row items-center content-center justify-center w-full mb-4">
                          <div className="flex-none px-4 py-3 text-gray-700 bg-gray-100 border-t border-b border-l border-gray-400 rounded-l-sm">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </div>
                          <input
                            type="email"
                            className="flex-1 w-full px-3 py-3 text-gray-700 placeholder-gray-700 bg-white border border-gray-400 rounded-r-sm focus:outline-none focus:border-blue-500"
                            placeholder="Email"
                            value={email}
                            onChange={this.handleChangeEmail}
                            required
                          />
                        </div>

                        <div className="relative flex flex-row items-center content-center justify-center w-full mb-4">
                          <div className="flex-none px-4 py-3 text-gray-700 bg-gray-100 border-t border-b border-l border-gray-400 rounded-l-sm">
                            <FontAwesomeIcon icon={faLock} />
                          </div>
                          <input
                            type="password"
                            className="flex-1 w-full px-3 py-3 text-gray-700 placeholder-gray-700 bg-white border border-gray-400 rounded-r-sm focus:outline-none focus:border-blue-500"
                            placeholder="Password"
                            value={password}
                            onChange={this.handleChangePassword}
                            required
                          />
                        </div>

                        { error && (
                          <div className="mb-4 text-sm text-red-500">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                                <span className="ml-1">{error}</span>
                            </div>
                        )}

                        <div className="text-center">
                          <button
                            className={
                              "w-full px-6 py-3 mb-1 mr-1 font-bold text-white bg-blue-500 rounded-full outline-none active:bg-blue-400 hover:bg-blue-600 focus:outline-none" +
                            (loading ? " opacity-50 cursor-not-allowed" : "")}
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                    <p className="text-center">
                      {"No account?"}
                      <Link
                        to="/signup"
                        className="ml-1 font-bold text-blue-500 hover:text-blue-600"
                      >
                        Sign Up!
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );

  }
}


const LoginPage = (props: RouteComponentProps) => {
  const auth = useAuth();

  return <Login {...props} onSubmit={auth.login} />;
};

export default LoginPage;
