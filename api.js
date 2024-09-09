import nextcoreai from "nextcoreai";
const request = new nextcoreai();

const input = {
    prompt: "A portrait of EINSTEIN with a party hat on, eating a birthday cake",
    output_quality: 80,
    extra_lora_scale: 0.8
};

const output = await request.run("pwntus/flux-albert-einstein:2ed2f6d1a8563caa2cfada419dffc68b52881bab9bac30c0b8cbe05a4dcae0e5", { input });
console.log(output)


