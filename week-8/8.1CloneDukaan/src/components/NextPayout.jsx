export function NextPayout({
    title,
    Amount,
    OrderCount}){
    return(
        <div class="bg-cyan-400 shadow-md">
            <div class="flex justify-start px-2 pt-2">
            <h2 class="mx-1">{title}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            </div>
            <div class="flex justify-between px-2 pt-2 mx-1">
            <h1>Rs {Amount}</h1>
            <div class="flex justify-end">
            <a>{OrderCount} order </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </div>
            </div>
            <div class="flex justify-between bg-cyan-900 p-3">
                <p>Next payout date:</p>
                <p>Today, 04:00 PM</p>
            </div>
        </div>
    )
}