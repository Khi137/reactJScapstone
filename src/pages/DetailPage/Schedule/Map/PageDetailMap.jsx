import React, { useState } from "react";
import { Modal } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
export default function PageDetailMap() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <span
        className="border shadow rounded  flex items-center space-x-1 xl:text-base md:text-base text-xs text-blue-500  hover:text-blue-700"
        onClick={() => setOpen(true)}
      >
        <EnvironmentOutlined /> <span> Đường đi </span>
      </span>
      <Modal
        footer={null}
        styles={{content: { padding: "0px" }}}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={700}
      >
        <iframe
          title="Đường đi"
          className="w-full h-[42rem]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2727748805482!2d106.69955722131182!3d10.790407931431071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292591b672e5%3A0xb0efbe20cbbe911d!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggQ3liZXJTb2Z0IC0gVHLhu6UgU-G7nyBDaMOtbmg!5e0!3m2!1svi!2s!4v1714315757845!5m2!1svi!2s"
        ></iframe>
      </Modal>
    </div>
  );
}
