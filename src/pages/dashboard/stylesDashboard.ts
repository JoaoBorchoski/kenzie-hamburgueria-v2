import styled from "styled-components";

export const StyledHeaderDashboard = styled.div`
    background: #e0e0e0;

    @media (max-width: 1000px) {
    }

    header {
        height: 70px;
        width: 80%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 0 auto;

        @media (max-width: 1000px) {
            flex-direction: column;
            height: 100px;
        }

        h1 {
            @media (max-width: 1000px) {
                font-size: 180%;
            }
            span {
                color: #eb6440;
            }
        }
        div {
            display: flex;
            align-items: center;

            gap: 16px;

            height: 100%;

            form {
                display: flex;
                align-items: center;

                background: #fff;
                padding: 0 16px;

                border-radius: 16px;

                height: 70%;
                width: 300px;

                @media (max-width: 1000px) {
                    width: 70%;
                }
            }

            input {
                width: 100%;
                border: none;
                font-size: 105%;
                height: 100%;
            }
        }
    }
`;

export const StyledDivDashboard = styled.div`
    display: flex;
    flex-direction: column;

    gap: 48px;
`;

export const StyledBoxDashboard = styled.div`
    width: 80%;
    height: 90%;

    margin: 0 auto;

    ul {
        display: flex;

        gap: 32px;
        flex-wrap: wrap;

        justify-content: space-between;

        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            border: #e0e0e0 solid 2px;
            border-radius: 8px;

            width: 30%;
            min-width: 300px;

            overflow: hidden;

            figure {
                width: 100%;
                height: 50%;

                overflow: hidden;

                background: #e0e0e0;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            div {
                padding: 24px;

                display: flex;
                flex-direction: column;
                gap: 12px;

                justify-content: flex-start;

                h3 {
                    font-family: "Roboto", sans-serif;
                    color: #27ae60;
                    font-weight: 400;
                }

                button {
                    width: 45%;
                    background: #bdbdbd;
                    height: 40px;
                    color: white;
                    border-radius: 8px;

                    font-size: 90%;
                }
            }
        }
        li:hover {
            border: solid 2px #27ae60;
            transition: 0.5s;
        }
        li:hover div button {
            background: #27ae60;
            transition: 1s;
        }
        li:hover img {
            scale: 1.3;
            transition: 1s;
        }
    }
`;

export const StyledCart = styled.div`
    width: 100%;
    height: 100%;

    header {
        background: #eb6440;

        height: 50px;

        display: flex;
        align-items: center;

        div {
            width: 90%;
            margin: 0 auto;

            color: white;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    ul {
        padding: 16px;
        display: flex;
        flex-direction: column;

        gap: 16px;

        height: 75%;
        max-height: 650px;

        flex-wrap: wrap;

        li {
            width: 100%;
            height: 100px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            overflow: hidden;

            padding-right: 16px;

            border: 2px solid #e0e0e0;
            border-radius: 16px;

            div {
                display: flex;
                align-items: center;

                gap: 12px;

                height: 100%;

                figure {
                    background: #e0e0e0;
                    display: flex;
                    justify-content: center;
                    width: 200px;
                    align-items: center;

                    @media (max-width: 1000px) {
                        width: 85px;
                        height: 100%;
                    }
                    img {
                        width: 100%;
                    }
                }

                section {
                    height: 80%;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;

                    @media (max-width: 1000px) {
                        height: 60%;
                    }

                    p {
                        font-size: 130%;
                    }
                }
            }
        }
    }
    > div {
        border-top: solid 2px rgba(0, 0, 0, 0.4);
        height: 15%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;

        section {
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-family: "Roboto", sans-serif;
                font-weight: 400;
            }
        }

        button {
            background: #e0e0e0;
            height: 60px;
            border-radius: 8px;
            font-size: 102%;
        }
    }
`;
