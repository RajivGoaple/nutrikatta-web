import { Component } from "@angular/core";

@Component({
  selector: "app-vision",
  templateUrl: "./vision.component.html",
  styleUrls: ["./vision.component.scss"]
})
export class VisionComponent {
  pillars = [
    { icon: "fas fa-leaf", title: "Sustainability", text: "We work with local farmers and minimise waste to build a greener food ecosystem." },
    { icon: "fas fa-heart", title: "Wellness First", text: "Every meal is designed with nutrition science to support your health goals." },
    { icon: "fas fa-users", title: "Community", text: "We are more than a food brand — we are a movement for healthier communities." },
    { icon: "fas fa-lightbulb", title: "Innovation", text: "We constantly evolve our menu with new wholesome recipes and seasonal superfoods." }
  ];

  commitments = [
    "Zero artificial preservatives or flavour enhancers",
    "Freshly prepared meals — never pre-packaged",
    "Transparent ingredient sourcing from trusted local vendors",
    "Affordable pricing so healthy eating is for everyone",
    "Consistent quality with love in every serving",
    "Responsive customer support — call us any time"
  ];
}
