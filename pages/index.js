import React from 'react';
export default function Home() {
  React.useEffect(() => {
    localStorage.getItem('USER_TOKEN');
  }, []);

  return (
    <>
      <div>Oi</div>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(localStorage.getItem('USER_TOKEN'));

  return {
    props: {
      msg: '[do SERVER]: oi fe'
    }
  };
}
