import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <header>
      <h1>
        <Link to="/">
          <img src="" className="app-logo" alt="로고" />
        </Link>
      </h1>
      <nav className="app-nav">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/signup" className="">
          회원가입
        </Link>
        <Link to="/grid" className="">
          AgGrid 예제
        </Link>
        <Link to="/detail" className="">
          상세보기
        </Link>
        <Link to="/content" className="">
          컨텐츠
        </Link>
      </nav>
    </header>
  );
}
