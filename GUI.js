//This put unreal android controls.
if (typeof Gravity == "undefined") {　　　　　　　　　　　
    var Gravity = {　}　　　　　　　　　　　　　　
        Gravity.LEFT = 1,
        Gravity.BOTTOM = 2,
        Gravity.CENTER = 3,
        Gravity.FILL = 4,
        Gravity.RIGHT = 5,
        Gravity.TOP = 6　　　　　　　
    　　　　　　　
}
class widget {
    constructor(Document) {
        this.document = document;
    }
}
class PopupWindow extends widget {
    constructor(Document) {
        super(document);
    }
    setContentView(View) {
        //TODO : setVIew.
    }
    setWidth(Width) {
        this.width = Width;
    }
    setHeight(Height) {
        this.height = Height;
    }
    showAtLocation(gravity1, gravity2, gravity3, gravity4) {
        this.dialog = document.createElement("p");
    }
}
class Button extends widget {
    constructor(Document) {
        super(document);
    }
}
class TextView extends widget {
    constructor(Document) {
        super(document);
    }
}
class ImageView extends widget {
    constructor(Document) {
        super(document);
    }
}