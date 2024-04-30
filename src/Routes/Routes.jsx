import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Land from "../page/Land";
import OurStory from "../page/OurStory";
import OurImpact from "../page/OurImpact";
import Press from "../page/Press";
import GiftCard from "../page/GiftCard";

export const router = createBrowserRouter([{
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Land></Land>
        },
        {
            path: "/ourstory",
            element: <OurStory></OurStory>
        },
        {
            path: "/ourimpact",
            element: <OurImpact></OurImpact>
        },
        {
            path: "/press",
            element: <Press></Press>
        },
        {
            path: "/giftcard",
            element: <GiftCard></GiftCard>
        },
       ]
}])