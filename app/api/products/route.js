import { NextResponse } from 'next/server';

let products = [
  { id: 1, name: 'Product 1', price: 99.99, stock: 10 },
  { id: 2, name: 'Product 2', price: 149.99, stock: 5 },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const newProduct = {
    id: products.length + 1,
    ...body,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  const { id } = body;
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get('id'));

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  products = products.filter((p) => p.id !== id);
  return NextResponse.json({ message: 'Product deleted successfully' });
}
