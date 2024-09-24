import { useState, useEffect, useCallback } from "react";

import { EmptyOrderHistory } from "./EmptyOrderHistory/EmptyOrderHistory";
import { NonEmptyOrderHistory } from "./NonEmptyOrderHistory/NonEmptyOrderHistory";
import { SectionContainer } from "../reusable/SectionContainer/SectionContainer";
import { Popup } from "../../../reusable/Popup/Popup";

import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";

import { orderServiceFactory } from "../../../../services/orderService";

import {
  ORDER_HISTORY_NAMING,
  BUTTON_TITLE,
} from "./constants/languageRelated";

import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

export const OrderHistory = () => {
  const { language } = useLanguageContext();

  const [orderItems, setOrderItems] = useState([]);

  const { userId } = useAuthenticationContext();

  const orderService = useService(orderServiceFactory);

  useEffect(() => {
    orderService
      .getAll(userId)
      .then((data) => {
        setOrderItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [orderService, userId]);

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = useCallback(() => {
    setDisplayPopup((displayPopup) => !displayPopup);
  }, []);

  const sectionTitle = ORDER_HISTORY_NAMING[language];

  const buttonTitle = BUTTON_TITLE[language];

  return (
    <>
      <SectionContainer
        sectionTitle={sectionTitle}
        callBackFunction={toggleDisplayPopup}
        icon={faClockRotateLeft}
        buttonTitle={buttonTitle}
      />
      {displayPopup && (
        <Popup
          toggleDisplayPopup={toggleDisplayPopup}
          displayPopup={displayPopup}
        >
          {orderItems.length < 1 ? (
            <EmptyOrderHistory popupCloseHandler={toggleDisplayPopup} />
          ) : (
            <NonEmptyOrderHistory orderItems={orderItems} />
          )}
        </Popup>
      )}
    </>
  );
};
