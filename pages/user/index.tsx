import { Router } from 'next/router';
import withGA from 'next-ga';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { USER_WANTS_SETS } from '../../queries';
import Heading from '../../components/Heading';
import LoadingKeyboardIllustration from '../../components/LoadingKeyboardIllustration';
import Images from '../../components/Images';
import { useContext, useEffect, useState } from 'react';
import { Context } from 'typings';
import context from '../../context';
import { ApolloClient } from 'apollo-boost';
import ButtonLink from '../../components/ButtonLink';
import Link from 'next/link';
import GoogleIcon from '../../components/GoogleIcon';
import GoogleAuth from '../../components/GoogleAuth';
import RedditIcon from '../../components/RedditIcon';
import RedditAuth from '../../components/RedditAuth';

function User() {
    const { state, dispatch } = useContext<Context>(context);
    const { data: userWantSetsResponse, loading: userWantsLoading, error: userWantsError } = useQuery(USER_WANTS_SETS, {
        fetchPolicy: 'network-only',
    });

    useEffect(() => {
        if (!userWantsLoading) {
            dispatch({
                type: 'set',
                payload: {
                    userWants: userWantSetsResponse.userWantsSets,
                },
            });
        }
    }, [userWantSetsResponse]);

    return (
        <div className="container large">
            {state.user !== undefined ? (
                <>
                    <Heading
                        mainTitle="These are your favorite keycapsets."
                        subTitle={`Hi, ${state.user.name}.`}
                        left
                    />
                    {userWantsLoading ? (
                        <LoadingKeyboardIllustration />
                    ) : userWantSetsResponse.userWantsSets.length > 0 ? (
                        <Images keycapsets={userWantSetsResponse.userWantsSets} />
                    ) : (
                        <div>
                            <h3 className="light">No likes found on your account.</h3>
                            <ButtonLink href="/">Start liking right away!</ButtonLink>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <Heading mainTitle="You're not signed in" subTitle="" left />
                    <h3 className="light">Sign in with your desired platform to start your keycapset journey!</h3>
                    <div className="cards">
                        <div className="card center">
                            <Link href="/sign-up/google">
                                <a>
                                    <GoogleIcon variant="dark" size={64} />
                                    <GoogleAuth disabled={false} text="Login with Google" />
                                </a>
                            </Link>
                        </div>

                        <div className="card center">
                            <Link href="/sign-up/reddit">
                                <a>
                                    <RedditIcon variant="dark" size={64} />
                                    <RedditAuth disabled={false} text="Login with Reddit" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

User.getInitialProps = () => {
    return {
        isLargeContainer: true,
    };
};
export default withGA('UA-115865530-2', Router)(User);
