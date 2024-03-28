import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ShoppingCart } from 'lucide-react';

interface Props {}

const CancelButton = (props: Props) => {
    const router = useRouter();

    const handlePaymentCancel = () => {
        toast("Transaction Cancelled !");
        router.push("/");
    };

    return (
        <div>
            <Button
                variant="destructive"
                className="px-4 mb-2"
                type="reset"
                onClick={handlePaymentCancel}
            >
                <span style={{ marginRight: '10px' }}>
                    <ShoppingCart />
                </span>
                Back To Cart
                
            </Button>
        </div>
    );
};

export default CancelButton;
