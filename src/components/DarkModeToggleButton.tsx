import styled from "styled-components";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const Button = styled.button<{ $isDark: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 12px;
  font-size: 16px;
  background-color: ${({ $isDark }) => ($isDark ? "#fff" : "#B6BBC4")};
  transition: background-color 0.3s ease-in;
  & > img {
    width: 25px;
    height: 25px;
  }
`;
function DarkModeToggleButton() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Button $isDark={isDark} onClick={toggleDarkAtom}>
      <img src="/img/icon-dark-mode.svg" alt="dark-mode" />
    </Button>
  );
}
export default DarkModeToggleButton;
