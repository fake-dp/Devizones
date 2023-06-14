import HeaderOrg from "../organisms/HeaderOrg";
import { useState } from "react";
import OauthModal from "../organisms/OauthModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <HeaderOrg openModal={openModal} />
      {showModal ? <OauthModal closeModal={closeModal} /> : null}
    </>
  );
};

export default Header;
