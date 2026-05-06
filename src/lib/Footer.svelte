<footer class="footer">
    <p>&copy; 2026 Portfolio by Nicholas McD.</p>
</footer>


<style>
    .footer {
        width: 100%;
        padding: var(--space-md);
        text-align: center;
        background-color: #293f47;
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        position: relative;
        z-index: 10;
        animation: fadeInFooter var(--transition-slow) ease-in-out;
    }

    .footer p{
         font-family:'Courier New', Courier, monospace;
        font-size: var(--font-sm);
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;
    }

    .footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
        animation: gradientScroll 6s linear infinite;
    }

    @keyframes fadeInFooter {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gradientScroll {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }

    @media (max-width: 768px) {
        .footer {
            padding: var(--space-sm);
            font-size: var(--font-xs);
        }
    }
</style>
