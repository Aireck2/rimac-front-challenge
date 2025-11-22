import RimacLogo from "@/assets/rimac-logo.svg?react";

import { PhoneFilled } from "@ant-design/icons";
import { Flex } from "antd";

export const Header = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{ margin: "1rem 1.5rem" }}
    >
      <div>
        <RimacLogo width={50} height={70} />
      </div>
      <Flex align="center" gap={"1rem"}>
        <p style={{ fontSize: "1rem", margin: 0, fontWeight: "bold" }}>
          ¡Compra por este medio!
        </p>
        <Flex align="center" gap={5}>
          <PhoneFilled style={{ fontSize: "1.2rem" }} />
          <p style={{ fontSize: "1.2rem", margin: 0, fontWeight: "bold" }}>
            (01) 411 6001
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};
