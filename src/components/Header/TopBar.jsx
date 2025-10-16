import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.topbar}>
      {/* Logo và hotline */}
      <div className={styles.left}>
        <img
          src="./img/logo.jpg"
          alt="Pizza-Cool"
          className={styles.logo}
        />
      </div>

      {/* Các nút chức năng */}
      <div className={styles.right}>
        <button className={styles.orderBtn}>🛵 Đặt giao hàng</button>
        <button className={styles.pickupBtn}>🛍️ Đặt đến lấy</button>

        <input
          type="text"
          className={styles.search}
          placeholder=" Nhập địa chỉ của bạn"
        />

        <a href="#login" className={styles.login}>
          👤 Đăng nhập / Tạo tài khoản
        </a>

      </div>
    </div>
  );
}

export default TopBar;
