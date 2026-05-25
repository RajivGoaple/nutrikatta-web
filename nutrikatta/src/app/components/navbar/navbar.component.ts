import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;
  activeSection = "home";

  private sections = ["home","about","menu","vision","location"];

  ngOnInit(): void { this.checkScroll(); }

  @HostListener("window:scroll")
  checkScroll(): void {
    this.scrolled = window.scrollY > 60;
    const offset = 120;
    for (const id of [...this.sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        this.activeSection = id;
        break;
      }
    }
  }

  scrollTo(e: Event, id: string): void {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    this.activeSection = id;
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }
}
