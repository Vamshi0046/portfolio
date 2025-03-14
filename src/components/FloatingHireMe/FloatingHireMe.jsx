import React, { useState } from "react";
import { WhatsAppOutlined, InstagramOutlined, CloseOutlined, MessageOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { GrLinkedinOption } from "react-icons/gr";

const FloatingHireMe = () => {
  const [open, setOpen] = useState(false);

  return (
    <FloatButton.Group
      open={open}
      trigger="click"
      style={{ insetInlineEnd: 24, bottom: 135, }} // Moved up
      icon={open ? <CloseOutlined /> : <MessageOutlined style={{ color: "#0077B5" }}
      />}  // Increased size
      onClick={() => setOpen(!open)}
    >
      <FloatButton
        icon={<WhatsAppOutlined style={{ color: "#25D366" }} />} // WhatsApp green color
        href="https://wa.me/9963610978?text=Hello!%20I'm%20interested%20in%20hiring%20you%20for%20a%20project."
        target="_blank"
      />
      <FloatButton
        icon={<InstagramOutlined style={{ color: "#E1306C" }} />} // Instagram pink color
        href="https://www.instagram.com/va_m_shi_46"
        target="_blank"
      />
      <FloatButton
        icon={<GrLinkedinOption style={{ color: "#0077B5" }} />} // LinkedIn blue color
        href="https://www.linkedin.com/in/siddhapuram-vamshi-78086a257"
        target="_blank"
      />
    </FloatButton.Group>
  );
};

export default FloatingHireMe;