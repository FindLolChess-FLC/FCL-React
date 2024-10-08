import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown({
  handleLogout,
}: {
  handleLogout: () => void;
}) {
  // 상태 관리: 목록이 보이는지 여부를 결정하는 state
  const [isOpen, setIsOpen] = useState(false);

  // 토글 함수
  const handleDropdown = () => {
    setIsOpen(!isOpen); // 상태를 반전시켜 목록을 토글
  };

  return (
    <div>
      {/* 토글 버튼 */}
      <button type="button" onClick={handleDropdown}>
        변지인님 환영합니다.
      </button>
      {/* 상태에 따라 목록 표시 */}
      {isOpen && (
        <ul>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <li>
            <Link to="/favorites">나의 즐겨찾기</Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout}>
              로그아웃
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
