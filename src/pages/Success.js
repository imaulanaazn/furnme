export default function Success() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-orange-100">
      <div className="card rounded shadow-[0_2px_3px_#C8D0D8] inline-block mx-auto my-0 p-[60px] bg-white h-min ">
        <div className="rounded-full h-40 w-40 bg-green-100 mx-auto flex items-center justify-center">
          <i className="checkmark text-[100px] leading-[200px] text-green-300">✓</i>
        </div>
        <h1 className="text-green-400 font-semibold text-4xl mb-2.5">Order success</h1>
        <p className="text-slate-600 text-lg m-0">
          We received your purchase request
          <br />
          {' '}
          please transfer the amount of money to this account
        </p>
      </div>
    </div>
  );
}
