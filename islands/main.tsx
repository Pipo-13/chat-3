// deno run ./islands/main.tsx
type Base64<imageType extends string> = `data:image/${imageType};base64${string}`;

export class Chat {
    name: string;
    UUID: number;
    type: number;
    img: Base64<'svg+xml'>;

    public constructor(name: string, type: number, UUID: number, img: Base64<'svg+xml'>) {
        this.name = name;
        this.UUID = UUID;
        this.type = type;
        this.img = img;
    }

    public getHTML() {
        return (
            <a>
                <img src={this.img} class="" />
                {this.name}
            </a>
        )
    }
}
//const sla = new Chat("s", 1, 0, null)
//console.log(sla.getHTML())