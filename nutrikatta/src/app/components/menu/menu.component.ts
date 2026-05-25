import { Component } from "@angular/core";

interface Badge { icon: string; label: string; }
interface MenuItem {
  name: string; description: string; price: number;
  icon: string; tag?: string; badges: Badge[];
}

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      name: "Breakfast Platter",
      description: "A healthy breakfast assortment to kick-start your day — packed with nutrients to fuel your morning.",
      price: 149, icon: "fas fa-th-large", tag: "Best Seller",
      badges: [{ icon: "fas fa-fire-alt", label: "High Protein" }, { icon: "fas fa-leaf", label: "Fresh" }]
    },
    {
      name: "Sprouts Bowl",
      description: "A wholesome bowl packed with protein, fibre and freshness. A plant-based powerhouse in every bite.",
      price: 99, icon: "fas fa-bowl-rice", tag: "Popular",
      badges: [{ icon: "fas fa-seedling", label: "Plant-Based" }, { icon: "fas fa-dumbbell", label: "Protein Rich" }]
    },
    {
      name: "Chia Pudding",
      description: "Creamy, nutritious and naturally delicious. Made fresh with chia seeds, milk and seasonal toppings.",
      price: 70, icon: "fas fa-jar", tag: "",
      badges: [{ icon: "fas fa-heart", label: "Gut Friendly" }, { icon: "fas fa-spa", label: "Antioxidants" }]
    },
    {
      name: "ABC Juice",
      description: "Fresh Apple, Beetroot & Carrot juice blended for your daily wellness — a vibrant detox in a glass.",
      price: 60, icon: "fas fa-glass-water", tag: "Daily Wellness",
      badges: [{ icon: "fas fa-tint", label: "Detox" }, { icon: "fas fa-sun", label: "Energy Boost" }]
    },
    {
      name: "Overnight Oats Bowl",
      description: "Made with oats, chia seeds, fresh fruits & mixed nuts for a healthy, filling and delicious start.",
      price: 100, icon: "fas fa-bowl-food", tag: "",
      badges: [{ icon: "fas fa-fire-alt", label: "Fibre Rich" }, { icon: "fas fa-apple-alt", label: "Fruits" }]
    },
    {
      name: "Chickpea Salad",
      description: "Protein-rich chickpea salad with fresh veggies, herbs and a zesty lemon dressing — light yet filling.",
      price: 119, icon: "fas fa-salad", tag: "Chef Special",
      badges: [{ icon: "fas fa-dumbbell", label: "High Protein" }, { icon: "fas fa-leaf", label: "Vegan" }]
    },
    {
      name: "Boiled Eggs (2 pc)",
      description: "Simple, protein-rich and filling. The perfect snack or add-on to fuel your day the clean way.",
      price: 30, icon: "fas fa-egg", tag: "",
      badges: [{ icon: "fas fa-fire-alt", label: "Protein" }, { icon: "fas fa-clock", label: "Quick Snack" }]
    }
  ];
}
