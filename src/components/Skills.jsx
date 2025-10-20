import { motion } from 'framer-motion'


const groups = [
{
title: 'AWS',
items: ['VPC', 'EC2', 'Lambda', 'API Gateway', 'S3', 'DynamoDB', 'RDS', 'CloudFront', 'Route 53', 'CloudWatch', 'IAM']
},
{
title: 'IaC & DevOps',
items: ['Terraform', 'CloudFormation', 'Docker', 'GitHub Actions', 'CI/CD']
},
{
title: 'Security',
items: ['KMS', 'WAF', 'Cognito', 'GuardDuty', 'CloudTrail']
}
]


export default function Skills(){
return (
<div>
<h2 className="section-title">Skills</h2>
<p className="section-subtitle">Core technologies I use for solution architecture.</p>


<div className="grid md:grid-cols-3 gap-6 mt-8">
{groups.map((g, i) => (
<motion.div
key={g.title}
className="card p-5"
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.35, delay: i * 0.05 }}
>
<h3 className="font-semibold">{g.title}</h3>
<div className="mt-3 flex flex-wrap gap-2">
{g.items.map(it => <span key={it} className="tag">{it}</span>)}
</div>
</motion.div>
))}
</div>
</div>
)
}
