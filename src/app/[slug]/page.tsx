const Index = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return <p>{(await params).slug}</p>
}

export default Index
