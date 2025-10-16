import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li><a href="#promo">Khuyến mãi</a></li>
        <li><a href="#pizza">Pizza</a></li>
        <li><a href="#chicken">Gà Ngon Vibe</a></li>
        <li><a href="#pasta">Nui Bò Lò</a></li>
        <li><a href="#italy">Mỳ Ý</a></li>
        <li><a href="#starter">Khai vị</a></li>
        <li><a href="#salad">Salad</a></li>
        <li><a href="#drinks">Thức uống</a></li>
        <li><a href="#vibe">Chất Vibe</a></li>
      </ul>

      <div className={styles.cart}>
        <span className={styles.icon}>🛒</span>
        <span>Giỏ hàng</span>
        <span className={styles.badge}>0</span>
      </div>
    </nav>
  );
}

export default NavBar;
