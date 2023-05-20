type Props = {
  params: {
    searchTerm: string;
  };
};

function page({ params: { searchTerm } }: Props) {
  return <div>page</div>;
}

export default page;
